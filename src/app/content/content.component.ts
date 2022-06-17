import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  descriptionList: string[] = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, eum repellat ipsum nemo minus atque consequuntur, laborum aliquid quae fuga laudantium illum voluptas, iste facere! Deserunt quia nam ab eveniet.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate eros eget scelerisque elementum. Nullam non eros elementum, tempor turpis et, mollis massa. Curabitur vulputate arcu at mi pharetra viverra. Sed ac efficitur massa. Vivamus finibus a eros eu pulvinar. Integer orci nisi, varius ut efficitur nec, laoreet quis est. Donec nulla arcu, consequat sed placerat ultricies, auctor vel metus. Nam sed ligula placerat, vehicula nulla a, tincidunt eros. Nunc molestie eu urna ut lobortis. Pellentesque in sem mattis, sagittis velit et, porttitor turpis. Pellentesque sapien nunc, scelerisque at dolor sit amet, sodales molestie libero. Nunc sem nunc, dignissim ut nibh vitae, maximus mollis lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet libero elementum, suscipit purus ut, efficitur sem. Maecenas tristique vel quam sodales gravida.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus feugiat vitae lacus ut rutrum. Maecenas eu dapibus lectus, ut vestibulum dui. Nunc nec orci egestas, feugiat nibh et, finibus libero. Proin consequat, lacus non rhoncus auctor, turpis turpis consequat diam, eu aliquet lorem nunc vitae ligula. Maecenas fermentum dapibus felis a dapibus. Vestibulum in bibendum nisi, id sollicitudin elit. Suspendisse sollicitudin eleifend rutrum.",
    "Mauris orci ligula, sagittis et velit id, eleifend cursus ante. Etiam in quam non mi sollicitudin egestas. Sed finibus ac velit eu lobortis. Mauris ut mi lorem. Cras nisi lorem, finibus ac dolor sit amet, eleifend vehicula turpis. Maecenas sit amet orci at mauris aliquam vehicula. Praesent pulvinar, odio vitae euismod volutpat, enim odio mollis nisi, eu facilisis turpis quam quis purus.",
    "Pellentesque eleifend viverra felis sed cursus. Duis vitae elit sit amet turpis aliquet sagittis. Pellentesque vel lacinia ipsum. Donec at purus lacus. Fusce mauris turpis, egestas luctus laoreet in, bibendum eget metus. Integer blandit imperdiet dui, bibendum mattis leo molestie sit amet. Vestibulum semper, dui eu feugiat imperdiet, nibh eros fermentum lorem, quis pretium diam nisl cursus nisi. Donec condimentum condimentum sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce a ipsum et metus lacinia interdum eu et quam. Nullam et lacus et enim vehicula posuere. Maecenas tempus magna eu tincidunt vehicula. Ut vestibulum sollicitudin odio, in convallis lacus. Nulla odio orci, auctor in ultricies ut, dapibus vitae sem. Vivamus cursus sapien eu tortor consequat, ac volutpat augue rutrum. Curabitur a ipsum et odio consequat laoreet quis ut quam.",
    "Sed pulvinar, ex nec vehicula porttitor, arcu ante eleifend arcu, vitae aliquet arcu ante eget magna. Aenean sit amet sapien erat. Duis mattis sapien at ligula eleifend tincidunt. Sed sit amet metus ut nisi vestibulum maximus efficitur a turpis. Nam sollicitudin vel erat in imperdiet. Nulla porta lacus vel neque euismod, eget sodales ex iaculis. Donec nec faucibus justo. Donec nisl urna, sodales quis lorem id, porttitor fermentum dui. Pellentesque sed ornare leo. Donec eget tellus a est tempor consectetur et id dolor. Aenean at dignissim lorem. Integer maximus bibendum libero, ac maximus felis consequat sed. Sed non lacinia enim."
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
