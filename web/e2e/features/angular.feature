Feature: Angular Accessibility Test
  Scenario: Test for accessibility violations on Angular.IO
    Given Navigate to page "http://localhost:4200/"
    Then I wait for "dashboard" to load
    Then The page should be accessible