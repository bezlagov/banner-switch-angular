import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContentComponent } from "./content/content.component";

export const routes: Routes = [
  { path: "", component: AboutComponent },
  { path: "content", component: ContentComponent },
  { path: "contacts", component: ContactsComponent },

];