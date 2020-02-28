import { EventEmitter } from '../../stencil.core';
export declare class MyButton {
    onClick: EventEmitter;
    label: string;
    onClickHandler(event: any): void;
    render(): any;
}
