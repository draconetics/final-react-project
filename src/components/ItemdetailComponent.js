import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class ItemDetail extends Component {

    renderItem(item) {
        if (item != null) {
            return (
                <Card>
                    <CardImg width="100%" src={item.image} alt={item.name}/>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            );

        } else {
            return (
                <div/>
            );
        }

    }

    renderComments(comments) {
        if (comments != null) {
            const commentsItems = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    </li>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsItems}
                    </ul>
                </div>
            );
        } else {
            return (
                <div/>
            );
        }
    }


    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderItem(this.props.item)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.item ? this.props.item.comments : null)}
                </div>
            </div>
        );
    }

}

export default ItemDetail;