import { Cell } from "./components/Cell";
import { Row } from "./components/Row";
import { Table } from "./components/Table";
import { Input } from "./components/Input";

/**
 * Starta tabindexandet på ett "högt nummer" för
 * att skapa en "egen serie" och på så sätt
 * hålla sig ur vägen för ev. befintliga. och
 * normala tabindex på sidan.
 */
const TABINDEX_START = 101;

export function ModelTable(props) {
    const { heading, data } = props;
    return (
        <section>
            <h2>{heading}</h2>
            <Table>
                <Row key="h">
                    <Cell header>År 1</Cell>
                    <Cell header>År 2</Cell>
                    <Cell header>År 3</Cell>
                    <Cell header>År 4</Cell>
                    <Cell header>År 5</Cell>
                </Row>

                <Row key="år">
                    {data.map(({ year }, idx) => {
                        return (
                            <Cell key={idx}>
                                <Input
                                    value={year}
                                    tabIndex={TABINDEX_START + idx}
                                />
                            </Cell>
                        );
                    })}
                </Row>
                {/* skriva ut resten av objektens props, en rad per prop */}
                {Array.from({ length: 10 }).map((_, rowIdx) => {
                    return (
                        <Row key={rowIdx}>
                            {data.map(({ fields }, itemIdx) => {
                                return (
                                    <Cell key={itemIdx}>
                                        <Input
                                            tabIndex={TABINDEX_START + itemIdx}
                                            value={fields[rowIdx + 1]}
                                        />
                                    </Cell>
                                );
                            })}
                        </Row>
                    );
                })}
            </Table>
        </section>
    );
}
