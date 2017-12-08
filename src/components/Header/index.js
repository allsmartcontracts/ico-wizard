import React from 'react'
import '../../assets/stylesheets/application.css';
import { Link } from 'react-router-dom'

export const Header = () => (
	<header className="header">
    <div className="container">
     const Toolbar = ({locale}) => <div>
    <select value={locale.value} onChange={(event) => locale.value = event.target.value}>
        <option value="de">Russian</option>
        <option value="en">English</option>
    </select>
</div>

export default inject("locale")(observer(Toolbar));
    </div>
  </header>
)

