import { Component, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../../../../../admin/manage-posts/models/Post.model';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {
  constructor() {}

  @Input() post: Post;

  ngOnInit() {
    this.post.content =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Venit ad extremum; Primum quid tu dicis breve? Itaque et manendi in vita et migrandi ratio omnis iis rebus, quas supra dixi, metienda.\n' +
      '\n' +
      'Duo Reges: constructio interrete. Quem si tenueris, non modo meum Ciceronem, sed etiam me ipsum abducas licebit. Hoc tu nunc in illo probas. Ait enim se, si uratur, Quam hoc suave! dicturum.\n' +
      '\n' +
      'Nihil enim iam habes, quod ad corpus referas; Quae ista amicitia est? Num igitur eum postea censes anxio animo aut sollicito fuisse? Tu enim ista lenius, hic Stoicorum more nos vexat. Sed haec quidem liberius ab eo dicuntur et saepius.';
  }
}
