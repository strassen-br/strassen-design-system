import { transform } from 'lodash';

export function filterArgTypesWithControls(argTypes: Record<string, any>): string [] {
  return transform<Record<string, any>, string[]>(argTypes, (acc, { control }, argTypeName: string) => {
    if (control) acc.push(argTypeName);
  }, []);
}
