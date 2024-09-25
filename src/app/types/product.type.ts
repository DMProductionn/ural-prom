export type TypeProduct = {
  id: string;
  name: string;
  img: string;
  subcategories: [
    {
      id: number;
      name: string;
      parent_category: {
        id: number;
        name: string;
      };
    },
  ];
};

export type TypeSearchProduct = {
  name: string
  img: string
};
