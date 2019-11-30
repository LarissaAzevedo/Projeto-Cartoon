import React from 'react';
import CardImage from '../card-image';
import CardTitle from '../card-title';
import { Link } from 'react-router-dom';
import Button from '../button';


class index extends React.Component {
    render() {
        return (
            <div className="cardGrid">
                <div className="CardItem">
                    <ul className="cards">
                        <li className="cards__item">
                            <div className="card">
                                <div className="card__content">
                                    <div className="img-card">
                                        <CardImage foto={this.props.cardFoto} />
                                    </div>
                                    <div className="card__title">
                                        <CardTitle title={this.props.title} />
                                    </div>
                                    <Link to="/cartoon" replace>
                                        <Button />
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default index;