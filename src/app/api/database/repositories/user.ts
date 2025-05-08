import User, { UserAttributes } from "../models/user";
import {
  ClientSession,
  FilterQuery,
  ProjectionType,
  PopulateOptions,
  SessionOperation,
} from "mongoose";
import bcrypt from "bcryptjs";

interface FindUserOptions<T> {
  filter: FilterQuery<T>;
  projection?: ProjectionType<T>;
  populate?: string | PopulateOptions | Array<string | PopulateOptions>;
  session?: ClientSession;
  lean?: boolean;
}

export async function findUser<T extends UserAttributes>({
  filter,
  projection,
  populate,
  session,
  lean = true,
}: FindUserOptions<T>): Promise<T | null> {
  const query = User.findOne(filter);

  if (projection) {
    query.select(
      projection as
        | string
        | string[]
        | Record<string, string | number | boolean | object>
    );
  }

  if (populate) {
    if (typeof populate === "string") {
      query.populate(populate);
    } else {
      query.populate(
        populate as PopulateOptions | (string | PopulateOptions)[]
      );
    }
  }

  if (session) {
    query.session(session);
  }

  if (lean) {
    query.lean();
  }

  try {
    return (await query.exec()) as Promise<T | null>;
  } catch (error) {
    throw new Error(`Failed to find use`);
  }
}

export const createUser = async (
  user: Partial<UserAttributes>,
  session?: ClientSession
): Promise<UserAttributes> => {
  const newUser = new User(user);
  if (session) {
    await newUser.save({ session });
  } else {
    await newUser.save();
  }

  return newUser;
};

export const findExistingUser = async (
  data: Partial<UserAttributes>,
  session?: ClientSession
): Promise<UserAttributes | null> => {
  return (await User.findOne(
    data as FilterQuery<UserAttributes>,
    session ? { session } : {}
  ).lean()) as UserAttributes | null;
};

export const updateUser = async (
  id: string,
  user: Partial<UserAttributes>,
  session?: ClientSession
): Promise<void> => {
  const updatedData: Partial<UserAttributes> = { ...user };

  if (updatedData.password) {
    const hash = await bcrypt.hash(String(updatedData.password), 10);
    updatedData.password = hash;
  }

  await User.updateOne(
    { _id: id },
    { $set: updatedData },
    session ? { session } : {}
  );
};
