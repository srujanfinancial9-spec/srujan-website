import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogPosts } from './blogPosts';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  element?: HTMLElement
  blogId!: string;
  blog: any;
  blogPosts = blogPosts;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(
      res => {
        this.JumpTo(res);
      }
    )

    this.activatedRoute.params.subscribe(params => {
      this.blogId = params['id'];
      this.blog = this.blogPosts.find(post => post.id === this.blogId);
    });
  }

  JumpTo(section: any) {
    this.element = document.getElementById(section) as HTMLElement;
    this.element.scrollIntoView({ behavior: "smooth" })
  }

}
