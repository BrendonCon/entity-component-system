export function getComponentName({ constructor }) {
  return `${constructor.name.charAt(0).toLowerCase()}${constructor.name.slice(1)}`;
}

export class Component {
  name = getComponentName(this);
  active = true;
  id = -1; // TODO: Perhaps link to entity id?
}