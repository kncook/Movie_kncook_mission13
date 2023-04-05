using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace movie_back.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "movieTimes",
                columns: table => new
                {
                    MovieId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Category = table.Column<string>(type: "TEXT", nullable: true),
                    Title = table.Column<string>(type: "TEXT", nullable: true),
                    Year = table.Column<int>(type: "INTEGER", nullable: true),
                    Director = table.Column<string>(type: "TEXT", nullable: true),
                    Rating = table.Column<string>(type: "TEXT", nullable: true),
                    Edited = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_movieTimes", x => x.MovieId);
                });

            migrationBuilder.InsertData(
                table: "movieTimes",
                columns: new[] { "MovieId", "Category", "Director", "Edited", "Rating", "Title", "Year" },
                values: new object[] { 1, null, "Ben Stiller", "Yes", "PG13", "Zoolander", 2001 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "movieTimes");
        }
    }
}
