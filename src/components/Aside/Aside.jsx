import React from 'react'
import Person from '../../assets/img/person-icon-outline-2.jpg'

export const Aside = () => {
    return (
        <aside className='aside'>
            <section >
                <div className="img">
                    <img src={Person} alt="Person" />
                </div>
                <h1>Nome genérico</h1>
            </section>

            <section>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus voluptate ut a omnis nihil officia facere adipisci, iure, dolores ad repellat, earum amet? Maiores tempora iste, porro explicabo reiciendis officia!</p>
            </section>

            <section>
                <ul>
                    <li><a href="#">Link1</a></li>
                    <li><a href="#">Link2</a></li>
                    <li><a href="#">Link3</a></li>
                    <li><a href="#">Link4</a></li>
                </ul>
            </section>
        </aside>
    )
}
