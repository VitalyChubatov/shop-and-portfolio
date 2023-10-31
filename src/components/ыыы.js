import React, { useState } from 'react'

export default function DropMenu() {
    let [dropOpen,dropClose] = useState(false);
  return (
		<div>
			<ul>
				<div >
					<li
						onClick={() => dropClose((dropOpen = !dropOpen))}
						className={`dropMenu-button ${dropOpen} && 'active'`}>
						s
					</li>
					<li>a</li>
					<li>d</li>
					<li>v</li>
				</div>
			</ul>
		</div>
	)
}
