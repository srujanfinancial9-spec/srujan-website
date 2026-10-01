import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { blogPosts } from './blogPosts';
import { BlogObject } from '../models/blog.model';
import { MetaDataService } from '../services/meta-data.service';


@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  element?: HTMLElement
  blogId!: string;
  blog!: BlogObject;
  blogPosts = blogPosts;

  constructor(private activatedRoute: ActivatedRoute, private metaData: MetaDataService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.blogId = params['id'];
      this.blog = this.blogPosts.find(post => post.id === this.blogId) as BlogObject;
      if (!this.blog) {
        this.router.navigate(['/404'], { skipLocationChange: true });
        return;
      }
      const summary = this.blog.content[0].replace(/\s+/g, ' ').trim();
      this.metaData.setMetaData(
        `${this.blog.title} | Srujan Financial Services`,
        summary.length > 155 ? summary.slice(0, summary.lastIndexOf(' ', 155)) + '…' : summary
      );
    });
  }

}
