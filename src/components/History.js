import React, { Component } from 'react';
import {List} from 'antd';

export default class Porfolio extends Component {
	render() {

		return (
			<section id="portfolio" style={{ background:'#fafffc' }}>
				<div className="row">
					<div align='center' className="twelve columns" >
						<h1>Brief History</h1>
						<p> "E-waste was initially dumped into landfills or incinerated. It had taken a while before people started realising the detrimental effects that such reckless and sleazy means caused the environment and their health.The first step taken towards organising e-waste was the Resource Conservation and Recovery Act(RCRA), which was enacted in 1976 by the US government."
						{"\n"}
						</p>

						<img src = "images/E-Waste-Dump-site.jpg" alt = "landfills"/>
						<p>
						{"\n"}
						"The tech boom that began in the 1980s has accelerated since 2000, fueled by the constant development of new gadgets and electronics. Short life spans and rapid product turnover has contributed to massive amounts of e-waste. For many companies, waste handlers, and municipalities in industrialized countries, the easiest solution to e-waste has been to export it to developing countries."
						</p>
						<img href="https://commons.wikimedia.org/wiki/File:Ewaste-pile.jpg" src = "images/history.jpg"/>
						<p>
						"That meant that old computers thrown away in California or cell phones discarded in Massachusetts have often been sent to places like Africa, Eastern Europe, South America, Southern and Southeast Asia, and, most commonly, China. Today, this continues to be an issue. Although much attention has been focused on e-waste and trade of hazardous waste in the past decade, the expense of processing e-waste in developed countries, the ease of shipping waste overseas, and the lack of regulations has made it difficult to curb the flow of e-waste overseas. As a result workers and children remain at risk as e-waste is dismantled, burned, and processed crudely to recover metals for resale on the market."
						</p>
						<img src = "images/developing.jpg"/>
					</div>
				</div>
			</section>
		);
	}
}

