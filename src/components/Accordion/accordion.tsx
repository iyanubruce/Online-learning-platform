import React, { useState } from 'react'

export default function Accordion() {
	const [accordionOpen, setAccordionOpen] = useState(false)
	return (
		<div className="w-full border border-black p-4">
			<button onClick={()=>{setAccordionOpen(prev => !prev)}} className='w-full text-left'>lesson name </button>
			{accordionOpen && <ul>
				<li className="flex w-full justify-between"><span>sublesson name</span><span>Duration</span></li>
				<li className="flex w-full justify-between"><span>sublesson name</span><span>Duration</span></li>
				<li className="flex w-full justify-between"><span>sublesson name</span><span>Duration</span></li>
				<li className="flex w-full justify-between"><span>sublesson name</span><span>Duration</span></li>
				<li className="flex w-full justify-between"><span>sublesson name</span><span>Duration</span></li>
			</ul>}
		</div>
	)
}