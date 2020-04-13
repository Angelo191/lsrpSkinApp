import { Injectable } from '@angular/core';

//this model is not used for the time being, it was created as a reference and in the eventual necessity to send data to the back-end server

export class Skin {
    id: number;
    name: string;
    credits: string;
    factions: string;
    parent_skin_id: number;
    race: number;
    gender: number;
    weight: number;
    category: number;
    rot_y: number;
    rot_x: number;
    rot_z: number;
    status: boolean;
}