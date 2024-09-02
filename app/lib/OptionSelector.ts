export interface Option {
  label: string;
  value: string | number;
}

export const optionSelector = <T extends object>(
  data: T[],
  label: keyof T | (keyof T)[],
  value: keyof T | (keyof T)[]
): Option[] => {
  if (!Array.isArray(data) || !label || !value) {
    return [];
  }
  return data?.map((item) => {
    const getLabel = () => {
      if (Array.isArray(label)) {
        return label
          .map((key) => item[key])
          .filter(Boolean)
          .join('-');
      }
      return item[label] as string;
    };

    const getValue = () => {
      if (Array.isArray(value)) {
        return value
          .map((key) => item[key])
          .filter(Boolean)
          .join('-');
      }
      return item[value] as string | number;
    };

    return {
      label: getLabel(),
      value: getValue(),
    };
  });
};
