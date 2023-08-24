import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogPosts } from './blogPosts';
import { BlogObject } from '../models/blog.model';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  element?: HTMLElement
  blogId!: string;
  blog!: BlogObject;
  blogPosts = blogPosts;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.blogId = params['id'];
      this.blog = this.blogPosts.find(post => post.id === this.blogId) as BlogObject;
      console.log(this.blog)
    });
  }

}
