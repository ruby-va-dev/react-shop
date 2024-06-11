declare module "*.scss" {
    interface IClassNames {
        [className: string]: string;
    }
    const classnames: IClassNames;
    export = classnames;
}

declare module '*.svg' {
    const content: any;
    export default content;
}