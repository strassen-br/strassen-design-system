import type { StoryContext, ArgType as BaseArgType, Annotations as BaseAnnotations } from '@storybook/addons';
import { Component as VueComponent } from 'vue';
/**
 * End of Meta
 */
/**
 * Controls
 */
declare type Control<T> = ControlArray | ControlBare | ControlColor | ControlEnum<T> | ControlNumber;
interface ControlBare {
    type: 'boolean' | 'object' | 'text' | 'date';
}
interface ControlArray {
    type: 'array';
    separator?: string;
}
interface ControlColor {
    type: 'color';
    presetColors?: string[];
}
interface ControlEnum<Option> {
    type: 'radio' | 'inline-radio' | 'check' | 'inline-check' | 'select' | 'multi-select';
    options: readonly Option[];
}
interface ControlNumber {
    type: 'number' | 'range';
    min?: number;
    max?: number;
    step?: number;
}
interface Table extends Disable {
    defaultValue?: Row;
    type?: Row | false;
}
interface Row {
    detail?: string;
    summary?: string;
}
interface Disable {
    disable?: boolean;
}
/**
 * End of Controls
 */
/**
 * Arg Types
 */
interface EnhancedArgType<T> extends BaseArgType {
    control?: Control<T> | Control<T>['type'] | Disable;
    defaultValue?: T;
    table?: Table;
    [key: string]: unknown;
}
declare type EnhancedArgTypes<ComponentPropsTypes> = {
    [key in keyof ComponentPropsTypes]?: EnhancedArgType<ComponentPropsTypes[key]>;
};
/**
 * End of Arg Types
 */
/**
  * Annotations
  */
interface EnhancedAnnotations<ComponentPropsTypes> extends Omit<BaseAnnotations<ComponentPropsTypes, VueComponent>, 'argTypes'> {
    argTypes?: EnhancedArgTypes<ComponentPropsTypes>;
}
/**
* End of Annotations
*/
/**
 * Story
 */
interface StoryReturnType<ComponentPropsTypes> extends EnhancedAnnotations<ComponentPropsTypes> {
    template: string;
}
interface EnhancedStoryContext<ComponentPropsTypes> extends Omit<StoryContext, 'argTypes'> {
    argTypes: EnhancedArgTypes<ComponentPropsTypes>;
}
export interface Story<ComponentPropsTypes> {
    (args: ComponentPropsTypes, context: EnhancedStoryContext<ComponentPropsTypes>): StoryReturnType<ComponentPropsTypes>;
}
/**
 * End of Story
 */
/**
 * Meta
 */
export interface Meta<ComponentPropsTypes> extends EnhancedAnnotations<ComponentPropsTypes> {
    title: string;
    component: VueComponent;
    subcomponents?: Record<string, VueComponent>;
}
export declare function filterArgTypesWithControls(argTypes: Record<string, any>): string[];
export declare function getSlotArgType(description: string): EnhancedArgType<string>;
export declare function getEventArgType(description: string, eventType?: string): EnhancedArgType<any>;
export declare function joinWithPipe(elements: readonly unknown[]): string;
export {};
