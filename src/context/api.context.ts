import { createContext } from "react";

export const Context = createContext({
  qualifications: [],
  projects: []
});

export const ProviderApi = Context.Provider;
export const ConsumerApi = Context.Consumer;
