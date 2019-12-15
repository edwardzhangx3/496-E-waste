import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';

export default class timeline extends Component {
	render() {
		return (
			<section id="timeline" style= {{ background: "#CECECE" }}>
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>FLow</h1>
						<div>
							<p>Once you’ve decided how you’d like to recycle your device, you’ll want to make sure the information on it is backed up. Your device may be changing hands and you don’t want to give others access to your personal and private data. Some organizations may offer to wipe the device for you, but to be sure you information isn’t leaked, it’s best to clear it yourself.
							</p>
							<h6> Here is the flow of old electronic recycling process: </h6>
								
						</div>
						<Timeline mode="alternate" >
							{/* <Timeline.Item style={{ fontSize: '15px' }}>
								Create a services site 2019-01-01
							</Timeline.Item> */}

							<Timeline.Item color="green" style={{ fontSize: '13px' }}>
								Disconnect the Device From Your Online Accounts
							</Timeline.Item >

							{/* <Timeline.Item style={{ fontSize: '15px' }} dot={<Icon type="clock-circle-o" style={{ fontSize: '15px' }} />}>
								Buy a cow.
							</Timeline.Item> */}

							<Timeline.Item color="red" style={{ fontSize: '13px' }}>
								Wipe Your Data
							</Timeline.Item>

							<Timeline.Item style={{ fontSize: '13px' }}>
								Remove Any Attached Storage
							</Timeline.Item>

							<Timeline.Item style={{ fontSize: '13px' }} dot={<Icon type="clock-circle-o" style={{ fontSize: '13px' }} />}>
								Back Up Your Data
							</Timeline.Item>
						</Timeline>
						<div>
							<h6> Back Up Your Data </h6>
							<p>Before you erase everything from your phone or computer, you will want to ensure you still have access to the information you need. If you’re recycling a computer, consider buying an external hard drive. Simply plug this into your computer and follow the instructions to copy all of your computer’s information onto the hard drive.
							</p>
							<h6> Remove Any Attached Storage </h6>
							<p>This includes DVD drives, card readers, floppy drives and USB ports. These items should be removed before recycling.
							</p>
							<h6> Wipe Your Data </h6>
							<p>Resetting the device back to its factory settings should remove all the information you have stored, from your passwords to your photos. 							
							</p>
							<ol>
								<li><p>Wipe Your Android</p>
									<p> Settings → System → Advanced → Reset options → Erase all data (factory reset)</p>
								</li>
								<li><p>Wipe Your iOS</p>
									<p> Settings → General → Reset → Erase All Content and Settings</p>
								</li>
								<li><p>Wipe Your Windows Computer</p>
									<p> Settings → Update & Security → Recover → Reset this PC → Get Started</p>
								</li>
								<li><p>Wipe Your Chromebook or Chrome Tablet</p>
									<p> Settings → Advanced → Powerwash</p>
								</li>
								<li><p>Wipe Your Mac</p>
									<p> Macs are a little tougher to wipe. You’ll have to begin by restarting the device. Once it begins to boot up hold down Option+Command+R until a spinning globe appears on your screen. Release the keys then choose the option that says “Reinstall macOS” and click “Continue.”</p>
								</li>
							</ol>
							<h6> Disconnect the Device From Your Online Accounts </h6>
							<p>If you’ve had your device for a while, you probably have it connected to online accounts such as Facebook, Twitter, Google, Apple or Microsoft. To ensure that the new owner of the device isn’t able to access these accounts, you’ll need to remotely delete the device from the accounts. You can do this in the security and privacy settings of these apps. There will be a section that says “Where You’re Logged In” or “Recently used devices” where you can remove devices that have access to the account. 							
							</p>

								
						</div>
					</div>
				</div>
			</section>
		);
	}
}

