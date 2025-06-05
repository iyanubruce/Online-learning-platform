import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";
import { CourseCategory } from "../constants/courses";

// Define the course state type
interface CourseState {
  course: {
    id: string;
    title: string;
    description: string;
    category: CourseCategory;
    instructorId: string;
    price: number;
    videoUrl: string;
    thumbnail: string;
  } | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: CourseState = {
  course: null,
  loading: false,
  error: null,
};

export const fetchCourseById = createAsyncThunk(
  "course/fetchCourseById",
  async (courseId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/courses/${courseId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const createCouse = createAsyncThunk(
  "course/createCourse",
  async (
    courseData: {
      title: string;
      description: string;
      category: CourseCategory;
      instructorId: string;
      price: number;
      videoUrl: string;
      thumbnail: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("/api/courses", courseData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    clearCourse: (state) => {
      state.course = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCourseById.fulfilled,
        (state, action: PayloadAction<CourseState["course"]>) => {
          state.course = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createCouse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCouse.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createCouse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions and reducer
export const { clearCourse } = courseSlice.actions;
export const selectCourse = (state: RootState) => state.course;
export default courseSlice.reducer;
