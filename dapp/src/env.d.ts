declare namespace React {
    interface CSSProperties {
        "--delay"?: string;
        "--open"?: number | string;
        // allow other custom properties
        [key: `--${string}`]: string | number | undefined;
    }
}