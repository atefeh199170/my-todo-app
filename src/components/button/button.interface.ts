export interface IButton {
    btn: HTMLButtonElement;
    text: string;
    onClick: () => MouseEvent | void;
}