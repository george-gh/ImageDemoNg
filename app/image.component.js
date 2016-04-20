System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ImageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ImageComponent = (function () {
                function ImageComponent() {
                    this.img1 = "https://pixabay.com/static/uploads/photo/2014/07/27/20/29/landscape-403165_960_720.jpg";
                    this.img2 = "http://img.archiexpo.it/images_ae/photo-g/67453-3698399.jpg";
                    this.img3 = "http://blogs-images.forbes.com/trevornace/files/2015/11/jupiter-largest-planet-1200x900.jpg";
                    this.defaultImage = 'https://udemy-images.udemy.com/course/750x422/500628_a962.jpg';
                    this.h = '400';
                    this.w = '640';
                }
                ImageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-image',
                        template: "\n\t\t<div>\n\t\t\t<div class=\"input-image\">\n\t\t\t\tInsert image url to display:\n\t\t\t\t<input type=\"text\" #mainImage (keyup)=\"0\">\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div class=\"image-choice\">\n\t\t\t\tOr select one of the following elements:\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"#\" (click)=\"mainImage.value = img1\">Landscape</a></li>\n\t\t\t\t\t<li><a href=\"#\" (click)=\"mainImage.value = img2\">Sky</a></li>\n\t\t\t\t\t<li><a href=\"#\" (click)=\"mainImage.value = img3\">Planet</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<img class=\"image\" [src]=\"mainImage.value || defaultImage\" width=\"{{w}}\" height=\"{{h}}\" >\n\t\t\t<br>\n\t\t\t<div class=\"info-url\">\n\t\t\t\t<p [hidden]=\"mainImage.value === ''\">Url: <a href=\"{{ mainImage.value }}\" target=\"_blank\">{{ mainImage.value }}</a></p>\n\t\t\t\t<p [hidden]=\"mainImage.value != ''\">No url provided or element clicked, this is the default Angular 2 image</p>\n\t\t\t\t<button name=\"reset\" class=\"reset-btn\"(click)=\"mainImage.value = ''\">Set default image</button>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ImageComponent);
                return ImageComponent;
            }());
            exports_1("ImageComponent", ImageComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThCQTtnQkFBQTtvQkFDQyxTQUFJLEdBQUcsd0ZBQXdGLENBQUM7b0JBQ2hHLFNBQUksR0FBRyw2REFBNkQsQ0FBQztvQkFDckUsU0FBSSxHQUFHLDZGQUE2RixDQUFDO29CQUNyRyxpQkFBWSxHQUFHLCtEQUErRCxDQUFDO29CQUMvRSxNQUFDLEdBQUcsS0FBSyxDQUFDO29CQUNWLE1BQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ1gsQ0FBQztnQkFsQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLDZqQ0F1QlQ7cUJBQ0QsQ0FBQzs7a0NBQUE7Z0JBUUYscUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELDJDQU9DLENBQUEiLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWltYWdlJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWltYWdlXCI+XG5cdFx0XHRcdEluc2VydCBpbWFnZSB1cmwgdG8gZGlzcGxheTpcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI21haW5JbWFnZSAoa2V5dXApPVwiMFwiPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8YnI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaW1hZ2UtY2hvaWNlXCI+XG5cdFx0XHRcdE9yIHNlbGVjdCBvbmUgb2YgdGhlIGZvbGxvd2luZyBlbGVtZW50czpcblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT48YSBocmVmPVwiI1wiIChjbGljayk9XCJtYWluSW1hZ2UudmFsdWUgPSBpbWcxXCI+TGFuZHNjYXBlPC9hPjwvbGk+XG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cIm1haW5JbWFnZS52YWx1ZSA9IGltZzJcIj5Ta3k8L2E+PC9saT5cblx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cIiNcIiAoY2xpY2spPVwibWFpbkltYWdlLnZhbHVlID0gaW1nM1wiPlBsYW5ldDwvYT48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aW1nIGNsYXNzPVwiaW1hZ2VcIiBbc3JjXT1cIm1haW5JbWFnZS52YWx1ZSB8fCBkZWZhdWx0SW1hZ2VcIiB3aWR0aD1cInt7d319XCIgaGVpZ2h0PVwie3tofX1cIiA+XG5cdFx0XHQ8YnI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaW5mby11cmxcIj5cblx0XHRcdFx0PHAgW2hpZGRlbl09XCJtYWluSW1hZ2UudmFsdWUgPT09ICcnXCI+VXJsOiA8YSBocmVmPVwie3sgbWFpbkltYWdlLnZhbHVlIH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgbWFpbkltYWdlLnZhbHVlIH19PC9hPjwvcD5cblx0XHRcdFx0PHAgW2hpZGRlbl09XCJtYWluSW1hZ2UudmFsdWUgIT0gJydcIj5ObyB1cmwgcHJvdmlkZWQgb3IgZWxlbWVudCBjbGlja2VkLCB0aGlzIGlzIHRoZSBkZWZhdWx0IEFuZ3VsYXIgMiBpbWFnZTwvcD5cblx0XHRcdFx0PGJ1dHRvbiBuYW1lPVwicmVzZXRcIiBjbGFzcz1cInJlc2V0LWJ0blwiKGNsaWNrKT1cIm1haW5JbWFnZS52YWx1ZSA9ICcnXCI+U2V0IGRlZmF1bHQgaW1hZ2U8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQ29tcG9uZW50IHtcblx0aW1nMSA9IFwiaHR0cHM6Ly9waXhhYmF5LmNvbS9zdGF0aWMvdXBsb2Fkcy9waG90by8yMDE0LzA3LzI3LzIwLzI5L2xhbmRzY2FwZS00MDMxNjVfOTYwXzcyMC5qcGdcIjtcblx0aW1nMiA9IFwiaHR0cDovL2ltZy5hcmNoaWV4cG8uaXQvaW1hZ2VzX2FlL3Bob3RvLWcvNjc0NTMtMzY5ODM5OS5qcGdcIjtcblx0aW1nMyA9IFwiaHR0cDovL2Jsb2dzLWltYWdlcy5mb3JiZXMuY29tL3RyZXZvcm5hY2UvZmlsZXMvMjAxNS8xMS9qdXBpdGVyLWxhcmdlc3QtcGxhbmV0LTEyMDB4OTAwLmpwZ1wiO1xuXHRkZWZhdWx0SW1hZ2UgPSAnaHR0cHM6Ly91ZGVteS1pbWFnZXMudWRlbXkuY29tL2NvdXJzZS83NTB4NDIyLzUwMDYyOF9hOTYyLmpwZyc7XG5cdGggPSAnNDAwJztcblx0dyA9ICc2NDAnO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
