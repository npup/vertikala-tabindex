import { data } from "./data";
import { ModelTable } from "./ModelTable";

export function App() {
    return (
        <>
            <h1>Testar tabeller med speciell tabordning</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                hic cumque ratione, natus at facilis recusandae repellat cum
                corrupti. Molestiae dolorem veritatis facilis ab, repudiandae
                aperiam sint tenetur provident placeat.
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti asperiores dolore placeat! Rem optio molestiae culpa
                dolor quae asperiores sapiente repellendus voluptates veniam?
                Assumenda iste in debitis corrupti, deleniti autem.
            </p>
            <ModelTable heading="Tabell 1" data={data} />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus voluptates voluptatem consequuntur minus corrupti
                itaque consequatur nobis, beatae, porro assumenda quos
                praesentium eligendi perferendis nulla earum rem repellendus
                cumque fugit.
            </p>
            <ModelTable heading="Tabell 2" data={data} />
            <ModelTable heading="Tabell 3" data={data} />
        </>
    );
}
