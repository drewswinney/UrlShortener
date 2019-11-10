﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using UrlShortener;

namespace UrlShortener.Migrations
{
    [DbContext(typeof(UrlShortenerContext))]
    partial class UrlShortenerContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("UrlShortener.Url", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("created");

                    b.Property<string>("long_url");

                    b.Property<string>("short_url");

                    b.Property<DateTime>("updated");

                    b.HasKey("id");

                    b.ToTable("Urls");
                });
#pragma warning restore 612, 618
        }
    }
}
