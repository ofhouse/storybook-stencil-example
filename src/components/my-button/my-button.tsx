import { Component, Prop, h, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Event() onClick: EventEmitter;

  @Prop() label: string;

  @Listen('click')
  onClickHandler(event) {
    this.onClick.emit(event);
  }

  render() {
    return <button>{this.label}</button>;
  }
}
