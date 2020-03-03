export interface Data {
    locations: string[];
    natures: string[];
    names: string[];
    genders: string[];
    nest: string[];
    judge: string[];
}
export interface Nest {
    normal: number;
    rare: number;
    location: any;
}
export interface ConfigsContent {
    data: Data;
    genders: string[];
    nests: Nest;
}
export declare const Configs: ConfigsContent;
