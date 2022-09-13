/**
 * @supertest
 */


const request = require('supertest')

const HOST = process.env.HOST || "https://petstore.swagger.io"

// describe('When testing jest', () => {
// 	describe('given i have a non failing test', () => {
// 		it('should be one', () => {
// 			expect(1).toBe(1)
// 		})
// 	})

// 	describe('given i have a non failing test', () => {
// 		it('should be two', () => {
// 			expect(2).toBe(2)
// 		})
// 	})
// })


describe("Testing petshop with supertest", () => {
	describe('given GET /', () => {
		it('should return status 200', () => {
			container = request(HOST)
			container.get('/')
				.expect('Allow', /GET/)
				.expect(200)
				.expect('Content-Type', 'text/html')
                
		})
	})
})