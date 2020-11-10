// waiting on official types but until then we can augment them a bit.
// see https://github.com/storybookjs/storybook/issues/11916
import { transform, camelCase } from 'lodash';

import type {
  StoryContext,
  ArgType as BaseArgType,
  Annotations as BaseAnnotations,
} from '@storybook/addons';
import { Component as VueComponent } from 'vue';
/**
 * End of Meta
 */

/**
 * Controls
 */
type Control<T> =
  | ControlArray
  | ControlBare
  | ControlColor
  | ControlEnum<T>
  | ControlNumber;

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
  type:
    | 'radio'
    | 'inline-radio'
    | 'check'
    | 'inline-check'
    | 'select'
    | 'multi-select';
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

type EnhancedArgTypes<ComponentPropsTypes> = {
  [key in keyof ComponentPropsTypes]?: EnhancedArgType<ComponentPropsTypes[key]>;
};
/**
 * End of Arg Types
 */

/**
  * Annotations
  */
interface EnhancedAnnotations<ComponentPropsTypes>
  extends Omit<BaseAnnotations<ComponentPropsTypes, VueComponent>, 'argTypes'> {
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
  (
    args: ComponentPropsTypes,
    context: EnhancedStoryContext<ComponentPropsTypes>
  ): StoryReturnType<ComponentPropsTypes>;
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

/* Stories helpers */
export function filterArgTypesWithControls(argTypes: Record<string, any>): string [] {
  return transform<Record<string, any>, string[]>(
    argTypes,
    (acc, { control }, argTypeName: string) => {
      if (control) acc.push(camelCase(argTypeName));
    },
    [],
  );
}

export function getSlotArgType(description: string): EnhancedArgType<string> {
  return {
    description,
    table: { type: false },
    control: { type: 'text' },
  };
}
export function getEventArgType(description: string, eventType?: string): EnhancedArgType<any> {
  return {
    description,
    table: { type: eventType ? { summary: eventType.toString() } : false },
  };
}
/* Stories helpers */
