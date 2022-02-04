import React, {Component} from "react";
import "./master.css"
export default class About extends Component {
    state={};
    render() {
        return(
            <div>
                <h1>About Us :</h1>
                <hr/>
                <div>Premium is A Tunisian gaming shop for computers,and soon gaming consoles.<br/>
                    Created in 2022 by a group of RBK student as a Senior phase week off project.<br/>
                    Please Feel Free to Contact us below.
                    
                </div>
                <hr/>
            <div>
                
                <div class="containerAbout">
  <form >

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit"/>

  </form>
</div>
                
            </div>
            </div>
        )
    }
}