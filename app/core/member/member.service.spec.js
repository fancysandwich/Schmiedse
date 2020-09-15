'use strict';

describe('Member', function() {
  var $httpBackend;
  var Member;
  var membersData = [
    {name: 'Member X'},
    {name: 'Member Y'},
    {name: 'Member Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Member` service before each test
  beforeEach(module('core.member'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Member_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('members/members.json').respond(membersData);

    Member = _Member_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the member data from `/members/members.json`', function() {
    var members = Member.query();

    expect(members).toEqual([]);

    $httpBackend.flush();
    expect(memebers).toEqual(membersData);
  });

});
