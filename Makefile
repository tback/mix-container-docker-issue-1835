mix-image-name = mix
cur-dir = $(shell pwd)
run:
	docker build -t $(mix-image-name) .
	docker run --rm -ti -v $(cur-dir):/app $(mix-image-name)
