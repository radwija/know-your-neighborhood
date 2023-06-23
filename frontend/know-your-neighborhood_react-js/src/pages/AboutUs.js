import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function AboutUs() {
    return (
        <div>
            <div className="heading">
                <h1>About Us</h1>
            </div>
            <div className='cards'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in leo lectus. Fusce in turpis vel urna cursus vehicula nec luctus lectus. Morbi sollicitudin egestas sapien eu mollis. Nunc diam ante, ornare a arcu sit amet, elementum rutrum libero. In nec maximus nibh. Nullam ut urna consectetur, ultricies metus ac, faucibus dolor. Suspendisse potenti. Sed malesuada tincidunt velit, nec lobortis est cursus eu. Etiam posuere luctus libero, quis viverra metus hendrerit eget. Pellentesque aliquet fringilla nisi, quis fermentum tortor fermentum id.
                </p>
                <p>
                    Sed efficitur tellus augue, eu porttitor ante consectetur quis. Ut quis sem tristique, convallis ex vel, cursus neque. Mauris eleifend quis purus at posuere. Nulla et lobortis lacus, in placerat eros. Integer laoreet tristique elit ut sollicitudin. Ut sed odio eget risus aliquam tempus a nec sapien. Nulla est mi, varius ut felis at, viverra consectetur risus. Nunc tincidunt ut diam vitae interdum. In quis massa elit. Maecenas dignissim mi id mauris elementum, vitae sodales lectus rhoncus. Fusce magna tortor, volutpat id odio in, scelerisque venenatis metus. Quisque vestibulum est quis aliquet aliquet. Duis lobortis nisl sem, sit amet malesuada mauris rhoncus quis. Aenean et tortor id tortor volutpat placerat. Etiam et dolor mi.
                </p>
            </div>
        </div>
    )
}
