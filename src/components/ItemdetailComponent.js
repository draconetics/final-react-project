import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Media} from "reactstrap";

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
                    <div key={comment.id}>
                        <Media tag="li">
                            <Media body>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {comment.date}</p>
                            </Media>
                        </Media>
                    </div>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    <Media list left>
                        {commentsItems}
                    </Media>
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
                    {this.renderItem(this.props.selectedItem)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedItem ? this.props.selectedItem.comments : null)}
                </div>
            </div>
        );
    }

}

export default ItemDetail;