import React from 'react'
import Image from "next/image"
type commentProps = {
  name: string,
  rating: number,
  comment: string,
  datePosted: string
}
export default function CommentCard({name, rating, comment, datePosted}: commentProps) {
  return (
    <div>
      <div className="flex">
        <div>
          <Image src={`${`/logo.svg`}`} width={59} height={59} alt="image" />
        </div>
          <div className='flex flex-col'>
            <span>{name}</span>
            <div>
              <span>
                {(rating === 0.5)?
                <div>
                  halfstar
                </div>:
                rating === 1?<div>1star</div>:
                  rating === 1.5?<div>1.5 star </div>:
                    rating === 2? <div>2star</div>:
                      rating === 2.5? <div>2.5star</div>:
                        rating === 3? <div>3star</div>:
                          rating === 3.5? <div>3.5 star</div>:
                            rating === 4? <div>4star</div>:
                              rating === 4.5? <div>4.5tar</div>:
                              <div>5star</div>
                }
              </span>
              <span></span>
            </div>
          </div>
      </div>
      <div>
        {comment}
      </div>
      <div>
        <span>Helpfull</span>
        <form>
          <span></span>
          <span></span>
        </form> 
      </div>
    </div>
  )
}
