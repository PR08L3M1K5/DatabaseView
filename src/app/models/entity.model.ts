export interface EntityModel{
  id:number;
  name:string;
  fields:EntityFieldModel[];
  xPosition:number;
  yPosition:number;
}
export interface EntityFieldModel{
 id:number;
 name:string;
 type:string;
 additional:string;
}
export interface EntityRelationModel{
  id:number;
  firstEntity:EntityModel;
  secondEntity:EntityModel
}
