export interface UpdatesInterface {
    id: number;
    title: string;
    author: string;
    cover: string;
    genre: string;
    publisher: string;
    reservation: string;
}

export interface UserInterface {
    id: number,
    username: string,
    password: string,
    books: [], 
    member: string, 
    reservations: string,
}

export interface HomeInterface {
title: string,
text: string,
image: ImageInterface;
links: LinkInterface[];
}

export interface ImageInterface {
    src: string,
    alt: string, 
}

export interface BooksGalleryInterface {
    title: string;
    gallery: ImageInterface;
    text: string,
    reservation: string,
}

export interface LinkInterface {
    img: ImageInterface,
    text: string, 
    link: string, 
}

export interface FooterInterface {
    logo: ImageInterface,
    links: LinkInterface[],
}
    
      
    