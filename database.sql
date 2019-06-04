-- DATABASE NAME:  react_gallery

-- Table Structure
CREATE TABLE gallery_items(
    id SERIAL PRIMARY KEY,
    path VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    likes INTEGER

);

-- Add Data from server/modules/gallery.router.js
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/best_lyft_ride.png','Best Lyft Ride to work with Coffee & Journey music videos','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/dad_girls.png','Dad & Girls','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/erin_dave.png','Erin & Dave at their Wedding','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/fam_dance.jpg','Me, Em, and Kids at a School Father Daughter/Mother Son Dance','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/Frederick.Barrelsmith.IV.jpg','This is an avatar I use on Xbox. It was in my pictures folder','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/goat_small.jpg','Photo of a goat taken at Glacier National Park','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/grace_bunny_cake.png','Grace made a bunny cake for her class project','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/hanni_fish_fry.png','Hanni stole her brother''s hat at a fish fry','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/hanni_fortnite.png','Hanni filling in for Lucas on Fortnite','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/ice_cube_ice_tea.png','This was in my pictures folder','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/kids_movie_popcorn.png','Kids eating popcorn and watching a movie','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/lucas_lacrosse.png','Lucas playing Lacrosse','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/music_tech_ID_1999_2000.jpg','This is my Music Tech ID which was in my Pictures folder for some reason','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/marshmello.png','Grace drew a picture of Marshmello','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/proposal_1.png','I purchased a brick outisde of the Grand Stand at the State Fair for our family','0');
INSERT INTO "gallery_items"("path", "description", "likes") VALUES('images/proposal_2.png','I showed Emily and the kids the brick and proposed at the State Fair in 2018','0');