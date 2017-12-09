import React from 'react'
import '../../assets/stylesheets/application.css';
import { Link } from 'react-router-dom'
import {inject, observer} from "mobx-react" 
@inject('locale') @observer

export class Header = () => (
	<header className="socials">
    <div className="container">
     const Toolbar = ({locale}) => <div>
    <select value={locale.value} onChange={(event) => locale.value = event.target.value}>
        <option value="de">Russian</option>
        <option value="en">English</option>
    </select>
</div>

    </div>
  </header>
)

