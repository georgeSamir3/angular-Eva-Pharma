import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  id: number;
  comments: any[];
  errorMessage: any;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.commentService.getComments(this.id).subscribe({
        next: (comment) => (this.comments = comment),
        error: (err) => (this.errorMessage = err),
      });
    });
  }
}
