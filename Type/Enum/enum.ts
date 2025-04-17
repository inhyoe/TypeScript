// Enum for User Roles
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

// Example usage
const currentUserRole: UserRole = UserRole.Admin;
if (currentUserRole === UserRole.Admin) {
  console.log("User has admin privileges.");
}

// Enum for HTTP Status Codes
enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500,
}

// Example usage
const handleResponse = (status: HttpStatus) => {
  switch (status) {
    case HttpStatus.OK:
      console.log("Request succeeded.");
      break;
    case HttpStatus.NotFound:
      console.log("Resource not found.");
      break;
    default:
      console.log("Unhandled status code.");
  }
};

// Enum for Days of the Week
enum DaysOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

// Example usage
const isWeekend = (day: DaysOfWeek): boolean => {
  return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
};

// Enum for Feature Flags
enum FeatureFlag {
  DarkMode = "DARK_MODE",
  BetaAccess = "BETA_ACCESS",
  NewDashboard = "NEW_DASHBOARD",
}

// Example usage
const isFeatureEnabled = (flag: FeatureFlag): boolean => {
  const enabledFeatures = [FeatureFlag.DarkMode, FeatureFlag.BetaAccess];
  return enabledFeatures.includes(flag);
};

enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Week.Sun); // 0
console.log(Week["Sun"]); // 0
console.log(Week[0]); // 'Sun'

let weekName: string = Week[5];
console.log(weekName); // 값이 5인 금요일이 출력 -> FriCopy
