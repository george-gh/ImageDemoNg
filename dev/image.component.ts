import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'my-image',
	template: `
		<div>
			<div class="input-image">
				Insert image url to display:
				<input type="text" #mainImage (keyup)="0">
			</div>
			<br>
			<div class="image-choice">
				Or select one of the following elements:
				<ul>
					<li><a href="#" (click)="mainImage.value = img1">Landscape</a></li>
					<li><a href="#" (click)="mainImage.value = img2">Sky</a></li>
					<li><a href="#" (click)="mainImage.value = img3">Planet</a></li>
				</ul>
			</div>
			<img class="image" [src]="mainImage.value || defaultImage" width="{{w}}" height="{{h}}" >
			<br>
			<div class="info-url">
				<p [hidden]="mainImage.value === ''">Url: <a href="{{ mainImage.value }}" target="_blank">{{ mainImage.value }}</a></p>
				<p [hidden]="mainImage.value != ''">No url provided or element clicked, this is the default Angular 2 image</p>
				<button name="reset" class="reset-btn"(click)="mainImage.value = ''">Set default image</button>
			</div>
		</div>
	`
})
export class ImageComponent {
	img1 = "https://pixabay.com/static/uploads/photo/2014/07/27/20/29/landscape-403165_960_720.jpg";
	img2 = "http://img.archiexpo.it/images_ae/photo-g/67453-3698399.jpg";
	img3 = "http://blogs-images.forbes.com/trevornace/files/2015/11/jupiter-largest-planet-1200x900.jpg";
	defaultImage = 'https://udemy-images.udemy.com/course/750x422/500628_a962.jpg';
	h = '400';
	w = '640';
}