export default class extends React.Component {
    render() {
        return (
            <div>
                <h1>About nextPodcast</h1>
                <img src="/static/platzi-logo.png" alt="platzi" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum blanditiis, dolorum eum deleniti animi totam beatae repellendus quidem esse exercitationem provident quisquam eveniet odit? Maxime odio sed rerum incidunt.</p>

                <style jsx>{`
                    div {
                        font-family: Arial;
                        max-width: 780px;
                        margin: 0 auto;
                    }
                    h1{
                        display: block;
                        margin: 0 auto;
                        text-align: center;
                        margin-bottom: 1rem;
                    }
                    img {
                        max-width: 300px;
                        display: block;
                        margin: 0 auto;
                    }
                    p{
                      color: #ccc; 
                    }
                `}</style>
            </div>
        );
    }
}
