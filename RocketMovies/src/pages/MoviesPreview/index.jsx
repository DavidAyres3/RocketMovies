import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Return } from "../../components/Return";
import { Tag } from "../../components/Tag"
import { Rate } from "../../components/Rate";
import { MdOutlineWatchLater } from 'react-icons/md'

import { Link } from "react-router-dom";

export function MoviesPreview() {
    return (
        <Container>
            <Header />
            <Main>
                <Link to="/">
                <Return title="Voltar" />
                </Link>
                <div className="title">
                    <h1>Interestellar</h1>
                    <Rate/>
                </div>
                <div className="author">
                    <img src="https://github.com/davidayres3.png" alt="UserImg" />
                    <span>Por David Ayres</span>
                    <MdOutlineWatchLater className="time" />
                    <span> 23/02/2023 às 13:00</span>
                </div>

                <div className="tags">
                    <Tag title="Movie" />
                    <Tag title="test" />
                    <Tag title="testtttttttttttttttttt" />
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum omnis voluptates aliquid amet laborum sunt dolorum animi consequatur natus! Velit repellendus, natus error necessitatibus iste mollitia maxime quaerat provident.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit quod. Praesentium fuga est explicabo dolor doloribus! Ad quos magnam dolore non eligendi voluptatum eum, totam odio assumenda illo itaque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut, tenetur libero dolore veritatis ad! Recusandae ducimus praesentium voluptatibus vero maxime ratione libero in culpa suscipit maiores optio, hic aliquam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum omnis voluptates aliquid amet laborum sunt dolorum animi consequatur natus! Velit repellendus, natus error necessitatibus iste mollitia maxime quaerat provident.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit quod. Praesentium fuga est explicabo dolor doloribus! Ad quos magnam dolore non eligendi voluptatum eum, totam odio assumenda illo itaque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut, tenetur libero dolore veritatis ad! Recusandae ducimus praesentium voluptatibus vero maxime ratione libero in culpa suscipit maiores optio, hic aliquam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum omnis voluptates aliquid amet laborum sunt dolorum animi consequatur natus! Velit repellendus, natus error necessitatibus iste mollitia maxime quaerat provident.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit quod. Praesentium fuga est explicabo dolor doloribus! Ad quos magnam dolore non eligendi voluptatum eum, totam odio assumenda illo itaque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut, tenetur libero dolore veritatis ad! Recusandae ducimus praesentium voluptatibus vero maxime ratione libero in culpa suscipit maiores optio, hic aliquam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum omnis voluptates aliquid amet laborum sunt dolorum animi consequatur natus! Velit repellendus, natus error necessitatibus iste mollitia maxime quaerat provident.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit quod. Praesentium fuga est explicabo dolor doloribus! Ad quos magnam dolore non eligendi voluptatum eum, totam odio assumenda illo itaque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut, tenetur libero dolore veritatis ad! Recusandae ducimus praesentium voluptatibus vero maxime ratione libero in culpa suscipit maiores optio, hic aliquam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum omnis voluptates aliquid amet laborum sunt dolorum animi consequatur natus! Velit repellendus, natus error necessitatibus iste mollitia maxime quaerat provident.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugit quod. Praesentium fuga est explicabo dolor doloribus! Ad quos magnam dolore non eligendi voluptatum eum, totam odio assumenda illo itaque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut, tenetur libero dolore veritatis ad! Recusandae ducimus praesentium voluptatibus vero maxime ratione libero in culpa suscipit maiores optio, hic aliquam.

                </p>
            </Main>
        </Container>
    )
}