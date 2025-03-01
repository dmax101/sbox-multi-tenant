import React, { ReactNode, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from '../ui/card';
import { v4 as uuidv4 } from 'uuid';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './kanban-app.css'

interface Card {
    id: string;
    title: string;
    description: string;
    archived: boolean;
}

interface Column {
    id: string;
    title: string;
    cards: Card[];
}

const initialColumns: Column[] = [
    { id: 'todo', title: 'To Do', cards: [] },
    { id: 'in-progress', title: 'In Progress', cards: [] },
    { id: 'done', title: 'Done', cards: [] },
];

function ShadCard(props: { card: Card, columnId: string, moveCard: (sourceColumnId: string, targetColumnId: string, cardId: string) => void }) {
    const [, ref] = useDrag({
        type: 'CARD',
        item: { id: props.card.id, columnId: props.columnId },
    });

    return (
        <div ref={ref} className="card">
            <h3>{props.card.title}</h3>
            <p>{props.card.description}</p>
            <Button onClick={() => props.moveCard(props.columnId, 'targetColumnId', props.card.id)}>Move</Button>
        </div>
    );
}

function ShadColumn(props: { column: Column, moveCard: (sourceColumnId: string, targetColumnId: string, cardId: string) => void }) {
    const [, ref] = useDrop({
        accept: 'CARD',
        drop: (item: { id: string, columnId: string }) => {
            props.moveCard(item.columnId, props.column.id, item.id);
        },
    });

    return (
        <div ref={ref} className="shad-column">
            <h2>{props.column.title}</h2>
            <div className="shad-column-content">
                {props.column.cards.filter(card => !card.archived).map(card => (
                    <ShadCard key={card.id} card={card} columnId={props.column.id} moveCard={props.moveCard} />
                ))}
                <Button onClick={() => props.moveCard(props.column.id, 'targetColumnId', 'cardId')}>Add Card</Button>
            </div>
        </div>
    );
}

const KanbanApp = () => {
    const [columns, setColumns] = useState<Column[]>(initialColumns);

    const addCard = (columnId: string, title: string, description: string) => {
        const newCard: Card = { id: uuidv4(), title, description, archived: false };
        setColumns(columns.map(column =>
            column.id === columnId ? { ...column, cards: [...column.cards, newCard] } : column
        ));
    };

    const moveCard = (sourceColumnId: string, targetColumnId: string, cardId: string) => {
        let cardToMove: Card | undefined;
        setColumns(columns.map(column => {
            if (column.id === sourceColumnId) {
                cardToMove = column.cards.find(card => card.id === cardId);
                return { ...column, cards: column.cards.filter(card => card.id !== cardId) };
            }
            return column;
        }));
        if (cardToMove) {
            setColumns(columns.map(column =>
                column.id === targetColumnId ? { ...column, cards: [...column.cards, cardToMove!] } : column
            ));
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="kanban">
                {columns.map(column => (
                    <ShadColumn key={column.id} column={column} moveCard={moveCard} />
                ))}
            </div>
        </DndProvider>
    );
};

export default KanbanApp;