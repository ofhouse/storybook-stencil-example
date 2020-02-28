import { EventEmitter } from '../../stencil.core';
export declare class MyButton {
    onClick: EventEmitter;
    label: string;
    handleClick(event: UIEvent): void;
    render(): any;
}
