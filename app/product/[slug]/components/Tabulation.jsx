"use client"
import {useState} from "react"
const Tabulation = ({attributes}) => {
const activeTailwindCode =
  "inline-block p-4 dark:text-yellow-300 text-yellow-700 border-b-2 border-yellow-700 dark:border-yellow-300 rounded-t-lg active";

const notActiveTailwindCode =
  "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-yellow-300";

const { description, features } = attributes;

const [tabContent, setTabContent] = useState([
  {
    name: "Description",
    content: description,
    active: true,
  },
  {
    name: "Features",
    content: features,
    active: false,
  },
  {
    name: "Here",
    content: "clnlferfom;qqw;mpc",
    active: false,
  },
  {
    name: "There",
    content: "mvrepnnerqqwpncdoee",
    active: false,
  },
]);

	const adjuctActiveTab = (index) => {
		console.log(index)
		const new_tab_content = tabContent.map((item,i) => {
			if(i === index){
				item.active = true
				return item
			}else{
				item.active = false
				return item
			}
		})
		console.log(new_tab_content)
		setTabContent(new_tab_content)
	}
	
	const isObject = (variable) => {
	  return typeof variable === 'object' && variable !== null;
	}

	return(
		<section className="overflow-hidden w-screen">
			<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
			    <ul class="flex -mb-px cursor-pointer">
					{
						tabContent.map( (content,index) => (
								<li class="mr-2" onClick={() => adjuctActiveTab(index)}>
						            <span className={content.active ? activeTailwindCode +"cursor-pointer" : notActiveTailwindCode+"cursor-pointer"}>
						               	{content.name}
						            </span>
			        			</li>
							))

					}
			        
			    </ul>
			</div>
			<div className="p-4">
			  {tabContent.map((content, index) => {
			    return (
			      <div className={`p-4 ${content.active ? "block" : "hidden"}`} key={index}>
			        {isObject(content.content) ? (
			          <div>
			            {Object.entries(content.content).map(([key, value]) => (
			              <div key={key} className="flex flex-row gap-4">
			                <span className="font-bold">{key}   :</span>
			                <p>{value}</p>
			              </div>
			            ))}
			          </div>
			        ) : (
			          content.content
			        )}
			      </div>
			    );
			  })}
			</div>

		</section>
		)
}

export default Tabulation